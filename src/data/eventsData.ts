export interface EventCard {
  id: string
  title: string
  datetime: string
  location: string
  description: string
}

export const eventsData: EventCard[] = [
  {
    id: '1',
    title: 'ALM Polar Plunge & Brunch',
    datetime: '11 am, January 1',
    location: 'ALM Community Beach Lot',
    description: 'Be sure to bring a donation for the food bank and you will get a raffle ticket. We always have great prizes. The Plunge will take place at Noon.'
  },
  {
    id: '2',
    title: 'ALM Independence Day Parade',
    datetime: '10 am, July 4',
    location: 'ALM Community Beach Lot',
    description: 'Meet at the corner of 33rd Ave S and S 194th before 10 am to get decorated. Join us at the end at the beach lot for ice cream and singing.'
  },
  {
    id: '3',
    title: 'National Night Out Against Crime Picnic and Potluck',
    datetime: '6 pm, on the 1st Tuesday of August',
    location: 'ALM Community Beach Lot',
    description: 'Burgers and drinks. Please bring a side dish and/or dessert to share. This is a great way for us to connect with our neighbors and visit with local representatives, city council members and law enforcement.'
  },
  {
    id: '4',
    title: 'ALSC Fishing Derby',
    datetime: '9 am, First Saturday of June',
    location: 'Angle Lake',
    description: 'Join us for our annual fishing derby! Prizes for biggest fish, smallest fish, and most fish caught. Bring your fishing gear and enjoy a day on the water with your neighbors.'
  }
]
