import { FaListUl, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import classes from './eventsAllConcerts.module.css';

const EventsAllConcerts = (props) => {
    const {eventDates} = props
    console.log("eventDates", eventDates) 
    return (
        <div className={classes.eventsBody}>
            <div className={classes.concertsHeader}>
                <div className={classes.concertsTitle}>
                    <h4 className={classes.concertsTitleH4}>No Concerts Near</h4>
                    <span className={classes.concertsTitleSpan}>(select your city)</span>
                </div>
                <div className={classes.dFlex}>
                    <div>
                        <select className={classes.select}>
                            <option value="0">Select your dates</option>
                            <option value="1">Date1</option>
                            <option value="2">Date2</option>
                            <option value="3">Date3</option>
                        </select>
                    </div>
                    <div className={classes.rightBar}>
                        <div className={classes.listings}>
                            <FaListUl color="white"/>
                            <span className={classes.listingsText}>Listings</span>
                        </div>
                        <div className={classes.calendar}>
                            <FaCalendarAlt />
                            <span className={classes.calendarText}>Calendar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.allConcertsbody}>
                <h5 className={classes.allConcertsTitle}>All Concerts</h5>
                <div>
                    { eventDates.map((eventDate) => (
                        <div key={eventDate.title} className={classes.concertsItem}>
                            <div className={classes.titleField}>
                                <FaChevronDown color="#545454" size={10}/>
                                <div className={classes.ml1}>
                                    <h6 className={classes.concertTitle}>{eventDate.date}</h6>
                                    {/* <span className={classes.concertTime}>{eventDate.venue}</span> */}
                                </div>
                            </div>
                            <div className={classes.city}>
                                <h6 className={classes.concertText}>{eventDate.city}</h6>
                                <span className={classes.concertComment}>{eventDate.venue}</span>
                            </div>
                            <div className={classes.seeTickets}>
                                <button className={classes.seeTicketsBtn}>See Tickets</button>
                            </div>
                        </div>
                    )) }
                </div>
                <div className={classes.loadMore}>
                    {console.log("eventDates.length", eventDates.length)}
                    { eventDates.length > 10 ? <button className={classes.loadMoreBtn}>Load More</button> : "" }
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsAllConcerts;