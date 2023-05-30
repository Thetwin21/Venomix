import React from 'react'
import events from '../Data/Events.json'

export const getVisibleEvents = (selectedCategories: any) => {
  if(!selectedCategories.length) return events
  return events.filter((event) => (
    selectedCategories.includes(event.category)
  ))
}
