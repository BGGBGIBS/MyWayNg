export interface Event{
    event_id : number;
    event_title : string;
    event_isExpanded: boolean;
}

export interface EventArray {
    results : Event[];
    count : number;
    statusCode : number;
}