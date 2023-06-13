import { Component } from '@angular/core';
import {  IPayPalConfig,
  ICreateOrderRequest,
  PaypalLandingPage } from "ngx-paypal";
declare var paypal:any;


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent {
  title = 'Tour of Heroes';
  cardForm: any;
  cardFields: any;
  hostedForm: any;
  orderID: any;
  name: 'Name' | undefined;
  country: 'Country Code' | undefined;

  ngOnInit():void {
    hostedFieldsInstance: paypal.hostedFields;
    paypal
    .Buttons({
      // Sets up the transaction when a payment button is clicked
      createOrder: function (data:any, actions:any) {
        return fetch("/api/orders", {
          method: "post",
          // use the "body" param to optionally pass additional order information
          // like product ids or amount
        })
          .then((response) => response.json())
          .then((order) => order.id);
      },
      // Finalize the transaction after payer approval
      onApprove: function (data:any, actions:any) {
        return fetch(`/api/orders/${data.orderID}/capture`, {
          method: "post",
        })
          .then((response) => response.json())
          .then((orderData) => {
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const transaction = orderData.purchase_units[0].payments.captures[0];
            alert(`Transaction ${transaction.status}: ${transaction.id}

              See console for all available details
            `);
          });
      },
    })
    .render("#paypal-button-container");
//     });

    if (paypal.HostedFields.isEligible()) {
      let orderId: any;
      // Renders card fields
      paypal.HostedFields.render({
        // Call your server to set up the transaction
        createOrder: () => {
          return fetch("/api/orders", {
            method: "post",
            // use the "body" param to optionally pass additional order information like
            // product ids or amount.
          })
            .then((res) => res.json())
            .then((orderData) => {
              orderId = orderData.id; // needed later to complete capture
              this.orderID = orderData.id;
              return orderData.id;
            });
        },
        styles: {
          ".valid": {
            color: "green",
          },
          ".invalid": {
            color: "red",
          },
        },
        fields: {
          number: {
            selector: "#card-number",
            name: "number",
            placeholder: "Card Number",
            formControlName: "hostedcardNumber",
            ngModel:"4111 1111 1111 1111"
          },
          cvv: {
            selector: "#cvv",
            name: "cvv",
            placeholder: "CVV",
            formControlName: "cvv",
            ngModel:""
          },
          expirationDate: {
            selector: "#expiration-date",
            placeholder: "Expiration Date",
            formControlName: "expiration",
            ngModel:""
          },
        },
      }).then((hostedFieldsInstance:any) => {

        this.hostedForm = hostedFieldsInstance;
        console.log(this.hostedForm);
      });
  }
}

  onSubmitForm(data:any){
    this.hostedForm
            .submit({
              // Cardholder's first and last name
              cardholderName: this.name,
              // Billing Address
              billingAddress: {
                countryCodeAlpha2: this.country,
              },
            }).then(() => {
              fetch(`/api/orders/${this.orderID}/capture`, {
                method: "post",
              })
                .then((res) => res.json())
                .then((orderData) => {
                  const errorDetail =
                    Array.isArray(orderData.details) && orderData.details[0];
                  if (errorDetail) {
                    var msg = "Sorry, your transaction could not be processed.";
                    if (errorDetail.description)
                      msg += "\n\n" + errorDetail.description;
                    if (orderData.debug_id) msg += " (" + orderData.debug_id + ")";
                    return alert(msg); // Show a failure message
                  }
                  // Show a success message or redirect
                  alert("Transaction completed! Transaction ID - "+orderData.id);
                });
            })
            .catch((err:any) => {
                        var msg = err.details[0].description;
                        alert("Payment could not be captured! \n Error - "+msg+" \n Debug ID - "+err.debug_id);
                      });
  }
}
