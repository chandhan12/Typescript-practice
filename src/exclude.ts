type EventType="click" | "scroll" | "mouseMove"

type ExcludedEvent=Exclude<EventType, "scroll"> 
//now ExcludedEvent contains "click" | "mouseMove" but "scroll" is exculded

function handleEvent(event :ExcludedEvent){
    console.log(`handling event ${event}`)
}

handleEvent("click")
handleEvent("mouseMove")
// but i cannot do this handleEvent("scroll") because scroll is exculded