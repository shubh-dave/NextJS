import EventItem from "./event-item";

function EventList(props) {

    const { items } = props
    return (
        <ul>
            {items.map(event => <EventItem id={event.id} location={event.location} image={event.image} date={event.date} title={event.title} />)}
        </ul>
    )
}

export default EventList;