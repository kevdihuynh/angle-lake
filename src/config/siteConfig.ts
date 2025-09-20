// Main site configuration file
// This file contains all the configurable content for the website
// Non-developers can easily update content here without touching component code

export interface ContactInfo {
  role: string
  name: string
  phone: string
  email: string
}

export interface ImportantMessage {
  title: string
  lines: string[]
  icon?: string
}

export interface Announcement {
  content: string
  icon?: string
}

export interface MeetingNotice {
  content: string
  icon?: string
}

export interface PDFDocument {
  value: string
  label: string
  url: string
}

export interface NavDropdownItem {
  label: string
  path: string
}

export interface ClubOfficer {
  title: string
  name: string
  phone: string
  email: string
}

export interface MemberAd {
  id: string
  website: string
  phone: string
  title: string
  description: string
}

export interface LinkItem {
  text: string
  url: string
}

export interface PaymentHistoryItem {
  name: string
  email: string
  notes: string
  type: string
  method: string
  amount: string
  date: string
}

export interface SiteConfig {
  // Site Branding
  siteTitle: string
  siteSubtitle: string
  
  // Navigation
  navigation: {
    home: NavDropdownItem[]
    about: NavDropdownItem[]
    payments: NavDropdownItem[]
    resources: NavDropdownItem[]
    eventsMedia: NavDropdownItem[]
  }
  
  // Hero Section
  heroMessage: ImportantMessage
  
  // Announcements
  announcement: Announcement
  
  // Meeting Notice (appears in events section)
  meetingNotice: MeetingNotice
  
  // Contact Information (Homepage)
  contactInfo: ContactInfo[]
  
  // PDF Documents
  newsletters: PDFDocument[]
  meetingNotes: PDFDocument[]
  
  // Default PDF Preview
  defaultMeetingNotes: {
    title: string
    pdfUrl: string
  }
  
  // About Page
  aboutPage: {
    clubOfficers: ClubOfficer[]
    covenants: PDFDocument[]
    bylaws: {
      title: string
      pdfUrl: string
    }
    beachRules: {
      postedRules: string[]
      addendumRules: string[]
      definitions: { term: string; definition: string }[]
      foundation: string[]
    }
  }
  
  // Resources Page
  resourcesPage: {
    memberAds: MemberAd[]
    waterDataLinks: LinkItem[]
    fishingLinks: LinkItem[]
    almInfo: {
      title: string
      description: string
      events: string[]
      contact: string
    }
    alscInfo: {
      title: string
      description: string
      activities: string[]
      note: string
      blogUrl: string
    }
    cityInfo: {
      title: string
      description: string
      learnMoreUrl: string
    }
  }
  
  // Payments Page
  paymentsPage: {
    defaultFormData: {
      amount: string
      firstName: string
      lastName: string
      email: string
      address: string
      notes: string
      paymentType: string
      paymentMethod: string
    }
    paymentHistory: PaymentHistoryItem[]
    treasurerReport: {
      title: string
      documentTitle: string
      returnAddress: string
      barcode: string
      documentInfo: string
      documentContent: string[]
    }
  }
}

// ============================================================================
// CONFIGURABLE CONTENT - UPDATE THESE VALUES AS NEEDED
// ============================================================================

export const siteConfig: SiteConfig = {
  // Site Branding
  siteTitle: "ANGLE LAKE MANOR",
  siteSubtitle: "COMMUNITY CLUB",
  
  // Navigation
  navigation: {
    home: [
      { label: 'Announcements', path: '/#announcements' },
      { label: 'Upcoming Events', path: '/#events' },
      { label: 'Recent Photos', path: '/#photos' },
      { label: 'Recent Meeting Notes', path: '/#meeting-notes' },
      { label: 'Contact Us', path: '/#contact' }
    ],
    about: [
      { label: 'Club Officers', path: '/about#officers' },
      { label: 'Legal (Covenants, Bylaws, etc.)', path: '/about#legal' },
      { label: 'Beach Lot Rules', path: '/about#beach-rules' }
    ],
    payments: [
      { label: 'Pay My Dues', path: '/payments#pay-dues' },
      { label: 'Have I Paid My Dues?', path: '/payments#payment-status' },
      { label: 'Donate', path: '/payments#donate' },
      { label: "Treasurer's Reports", path: '/payments#treasurer-reports' }
    ],
    resources: [
      { label: 'ALM Member Ads', path: '/resources#member-ads' },
      { label: 'Angle Lake Information & Water Data', path: '/resources#water-data' },
      { label: 'Fishing Guidelines', path: '/resources#fishing-guidelines' },
      { label: 'Angle Lake Manor vs ALSC', path: '/resources#alm-vs-alsc' },
      { label: 'City of SeaTac', path: '/resources#city-seatac' }
    ],
    eventsMedia: [
      { label: 'Events', path: '/events-media#events' },
      { label: 'Photos & Videos', path: '/events-media#photos-videos' },
      { label: 'Newsletters', path: '/events-media#newsletters' },
      { label: 'Meeting Notes', path: '/events-media#meeting-notes' }
    ]
  },
  
  "heroMessage": {
    "title": "Important Message",
    "icon": "!",
    "lines": [
      "Our next ALM meeting is at 6 pm on",
      "Thursday, February 8 at Tom & Kathy",
      "Stewart's, 19246 34th Ave S."
    ]
  },
  "announcement": {
    "icon": "📢",
    "content": "Please pay your 2024 dues online and save my shoe leather going door to door. They are $50 this year which will help the maintenance and improvements at the beach lot. The most significant being a new dock. We need to raise $100k. Fundraising ideas are welcome as are generous donations (write DOCK in the notes). We are off to a good start with $790 already donated."
  },
  "meetingNotice": {
    "icon": "!",
    "content": "Our next ALM meeting is at 6 pm on Thursday, February 8 at Tom & Kathy Stewart's, 19346 34th Ave S."
  },
  "contactInfo": [
    {
      "role": "President & Beach Lot Manager",
      "name": "Ted Van Blaricom",
      "phone": "(206) 555-0123",
      "email": "ted@anglelakemanor.com"
    },
    {
      "role": "VP Of Administration",
      "name": "Dean Martin",
      "phone": "(206) 555-0124",
      "email": "dean@anglelakemanor.com"
    },
    {
      "role": "VP Of Architectural Control Committee",
      "name": "Eric Christenson",
      "phone": "(206) 555-0125",
      "email": "eric@anglelakemanor.com"
    },
    {
      "role": "Secretary",
      "name": "Deb Anderson",
      "phone": "(206) 555-0126",
      "email": "deb@anglelakemanor.com"
    },
    {
      "role": "Treasurer",
      "name": "Bob Simmons",
      "phone": "(206) 555-0127",
      "email": "bob@anglelakemanor.com"
    }
  ],
  "newsletters": [
    {
      "value": "january-2024",
      "label": "January, 2024",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2025.pdf"
    },
    {
      "value": "february-2021",
      "label": "February, 2021",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2025.pdf"
    },
    {
      "value": "december-2019",
      "label": "December, 2019",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2025.pdf"
    },
    {
      "value": "may-2017",
      "label": "May 2017",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2025.pdf"
    }
  ],
  "meetingNotes": [
    {
      "value": "august-2025",
      "label": "August 2025 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2025.pdf"
    },
    {
      "value": "april-2025",
      "label": "April 2025 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMApr2025.pdf"
    },
    {
      "value": "february-2025",
      "label": "February 2025 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMFeb2025.pdf"
    },
    {
      "value": "december-2024",
      "label": "December 2024 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMDec2024.pdf"
    },
    {
      "value": "october-2024",
      "label": "October 2024 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMOct2024.pdf"
    },
    {
      "value": "august-2024",
      "label": "August 2024 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2024.pdf"
    },
    {
      "value": "june-2024",
      "label": "June 2024 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMJun2024.pdf"
    },
    {
      "value": "february-2024",
      "label": "February 2024 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMFeb2024.pdf"
    },
    {
      "value": "december-2023",
      "label": "December 2023 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMDec2023.pdf"
    },
    {
      "value": "october-2023",
      "label": "October 2023 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMOct2023.pdf"
    },
    {
      "value": "august-2023",
      "label": "August 2023 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2023.pdf"
    },
    {
      "value": "june-2023",
      "label": "June 2023 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMJun2023.pdf"
    },
    {
      "value": "april-2023",
      "label": "April 2023 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMApr2023.pdf"
    },
    {
      "value": "february-2023",
      "label": "February 2023 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMFeb2023.pdf"
    },
    {
      "value": "december-2022",
      "label": "December 2022 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMDec2022.pdf"
    },
    {
      "value": "october-2022",
      "label": "October 2022 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMOct2022.pdf"
    },
    {
      "value": "august-2022",
      "label": "August 2022 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2022.pdf"
    },
    {
      "value": "may-2022",
      "label": "May 2022 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMMay2022.pdf"
    },
    {
      "value": "february-2022",
      "label": "February 2022 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMFeb2022.pdf"
    },
    {
      "value": "october-2021",
      "label": "October 2021 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMOct2021.pdf"
    },
    {
      "value": "august-2021",
      "label": "August 2021 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMAug2021.pdf"
    },
    {
      "value": "july-2021",
      "label": "July 2021 Special Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMJuly2021.pdf"
    },
    {
      "value": "june-2021",
      "label": "June 2021 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMJune2021.pdf"
    },
    {
      "value": "april-2021",
      "label": "April 2021 Meeting",
      "url": "https://anglelakemanor.com/Minutes/ALMApr2021.pdf"
    }
  ],
   "defaultMeetingNotes": {
     "title": "ALM Meeting Minutes - August 2025",
     "pdfUrl": "https://anglelakemanor.com/Minutes/ALMAug2025.pdf"
   },
   
   // About Page Configuration
   aboutPage: {
     clubOfficers: [
       {
         title: 'Treasurer',
         name: 'Sid Sherman',
         phone: '(206) 555-0101',
         email: 'sid@anglelakemanor.com'
       },
       {
         title: 'President & Beach Lot Manager',
         name: 'Terri Sue Stockinger',
         phone: '(206) 555-0102',
         email: 'terri@anglelakemanor.com'
       },
       {
         title: 'VP Of Administration',
         name: 'Rick Smith',
         phone: '(206) 555-0103',
         email: 'rick@anglelakemanor.com'
       },
       {
         title: 'Secretary',
         name: 'Jill Carlson',
         phone: '(206) 555-0104',
         email: 'jill@anglelakemanor.com'
       },
       {
         title: 'VP Of Architectural Control Committee',
         name: 'Kyle Marshall',
         phone: '(206) 555-0105',
         email: 'kyle@anglelakemanor.com'
       }
     ],
     covenants: [
       { value: 'snively-tracts', label: 'Covenants - Snively\'s Angle Lake Tracts', url: 'https://anglelakemanor.com/ALMNovember2010Covenants.pdf' },
       { value: 'petition-signatures', label: 'ALM Covenants - ALM Petition Signatures for Version', url: 'https://anglelakemanor.com/PetitionSignaturesRevisions.pdf' },
       { value: 'wa-state-bar', label: '2004 WA State Bar Assoc. CC&R Guidelines', url: 'https://anglelakemanor.com/ALM%20Law%20Assn%20CCR%20numbered.pdf' }
     ],
     bylaws: {
       title: 'ANGLE LAKE MANOR COMMUNITY CLUB BY-LAWS',
       pdfUrl: 'https://anglelakemanor.com/bylaws.pdf'
     },
     beachRules: {
       postedRules: [
         'Guests must be accompanied by a member.',
         'Children must be accompanied by a parent. Not responsible for accidents.',
         'No pets allowed.',
         'Gates must be locked at all times.',
         'No boat storage at lot.',
         'Beach lot closes at 10 PM.',
         'After boat launching, vehicles and trailers must be removed from beach lot.',
         'Parking for owners only.'
       ],
       addendumRules: [
         'Access to the beach lot is restricted to members only during designated hours.',
         'All gates must be secured immediately after entry or exit.',
         'Guests must be accompanied by a member at all times.',
         'Children under 12 must be supervised by a parent or guardian.',
         'Members are responsible for the conduct of their guests.',
         'No pets are permitted on the beach lot premises.',
         'Enforcement of these rules is the responsibility of the Beach Committee.',
         'Violations should be reported to the Beach Committee Chair.',
         'Complaints will be investigated within 48 hours.',
         'Penalties for violations may include temporary suspension of beach privileges.',
         'Repeated violations may result in permanent loss of beach access.',
         'Appeals may be made to the Board of Directors within 7 days.',
         'Emergency situations should be reported immediately to security.',
         'All members must carry their access card at all times.',
         'Lost or stolen access cards must be reported immediately.',
         'Replacement cards are available for a $25 fee.',
         'Beach lot hours are 6 AM to 10 PM daily.',
         'Special events may require advance notice and approval.',
         'Maintenance work will be posted 24 hours in advance.',
         'These rules may be amended by majority vote of the Board.',
         'All members are responsible for reading and understanding these rules.'
       ],
       definitions: [
         { term: 'Member (Owner)', definition: 'Defined by property ownership and current dues payment.' },
         { term: 'Children', definition: 'Legal dependents aged 12 and under.' },
         { term: 'Young adults', definition: 'Legal dependents aged 13 and over.' },
         { term: 'Caregiver', definition: 'A person legally employed by a Member.' },
         { term: 'Guests', definition: 'Anyone not defined above.' },
         { term: 'The Public', definition: 'Anyone not defined above.' }
       ],
       foundation: [
         'The community beach lot is a shared resource owned collectively by all members of Angle Lake Manor. This shared ownership comes with shared responsibilities and restrictions designed to protect the investment and ensure fair access for all members.',
         'Homeowner\'s insurance policies typically cover liability for accidents that occur on the property, but this coverage is contingent upon adherence to established safety rules and proper maintenance of the facility.',
         'The covenants and restrictions governing the beach lot are legally binding and enforceable. These rules are designed to maintain property values, ensure safety, and provide a pleasant environment for all residents.',
         'Public access to the beach lot is strictly prohibited. The facility is maintained through member dues and is intended solely for the use and enjoyment of current members in good standing.'
       ]
     }
   },
   
   // Resources Page Configuration
   resourcesPage: {
     memberAds: [
       {
         id: '1',
         website: 'sing.com',
         phone: '888-888-8888',
         title: 'Singing Lessons with Bob',
         description: 'Designed for all ages, our singing lessons bring out your strengths & build your vocal confidence.'
       },
       {
         id: '2',
         website: 'swim.com',
         phone: '888-888-8888',
         title: 'Swimming Lessons with Sam',
         description: 'We offer group and private swim lessons with eight stages of development so you can find a class that\'s just right for you.'
       },
       {
         id: '3',
         website: 'landscape.com',
         phone: '888-888-8888',
         title: 'Lee\'s Landscaping',
         description: 'Lee\'s General Landscaping is an award winning full-service landscaping and yard clean up company. We have been in operation for over 30 years.'
       }
     ],
     waterDataLinks: [
       { text: 'Angle Lake Current Water Statistics', url: 'https://anglelakemanor.com/water-data/current-statistics' },
       { text: '2020 Angle Lake Water Quality Report', url: 'https://anglelakemanor.com/water-data/2020-water-quality-report' },
       { text: '2016 Angle Lake Water Level Report', url: 'https://anglelakemanor.com/water-data/2016-water-level-report' },
       { text: '2012 Angle Lake Water Quality Report', url: 'https://anglelakemanor.com/water-data/2012-water-quality-report' },
       { text: 'Angle Lake Level - Multiyear Comparison on August 31, 2009', url: 'https://anglelakemanor.com/water-data/multiyear-comparison-2009' },
       { text: 'Water Level Comparison', url: 'https://anglelakemanor.com/water-data/water-level-comparison' },
       { text: 'Hydrogeologic Cross Section F-F\'', url: 'https://anglelakemanor.com/water-data/hydrogeologic-cross-section' },
       { text: 'Potentiometric Surface of Aquifer Qua', url: 'https://anglelakemanor.com/water-data/potentiometric-surface' }
     ],
     fishingLinks: [
       { text: 'Washington Department of Fish & Wildlife', url: 'https://wdfw.wa.gov/' }
     ],
     almInfo: {
       title: 'What is Angle Lake Manor?',
       description: 'Angle Lake Manor is a Homeowners Association representing 88 homes located on the west side of Angle Lake. We meet bi-monthly on the 2nd Thursday of Feb, Apr, June, Aug, Oct & Dec. Our major events include:',
       events: [
         '4th of July Parade & Ice Cream Social',
         'National Night Out Against Crime',
         'Holiday Party',
         'White Elephant Gift Exchange'
       ],
       contact: 'For more information about ALM, please contact our board members.'
     },
     alscInfo: {
       title: 'What is Angle Lake Shore Club?',
       description: 'Angle Lake Shore Club is a social organization for residents and non-residents. New members receive information through our blog, newsletters, and Facebook Community pages. Contact Jean for more information. Dues are $20 per household.',
       activities: [
         'Polar Bear Plunge',
         'Fishing Derby',
         'Swim and Boat Races',
         'Clean Sweep & Lunch',
         'Tasty Tacos',
         'Holiday Lights Boat Cruise',
         'Holiday Party',
         'Members Only Holiday Party'
       ],
       note: 'Note: Quoted costs may change.',
       blogUrl: 'https://angleshoreclub.blogspot.com/'
     },
     cityInfo: {
       title: 'Welcome!',
       description: 'The City of SeaTac was incorporated in February 1990. Located in the Pacific Northwest, SeaTac is a vibrant community with a population of 30,000. We are proud to be home to the Seattle-Tacoma International Airport, serving as a gateway to the Pacific Northwest.',
       learnMoreUrl: 'https://www.seatacwa.gov/'
     }
   },
   
   // Payments Page Configuration
   paymentsPage: {
     defaultFormData: {
       amount: '100.00',
       firstName: 'John',
       lastName: 'Doe',
       email: 'johndoe@gmail.com',
       address: '8888 13th Ave S, Seattle, WA 98168',
       notes: 'Fundraising for Improve Beach Ltd...',
       paymentType: 'annual-dues',
       paymentMethod: 'paypal'
     },
     paymentHistory: [
       {
         name: 'John Doe',
         email: 'jd123@gmail.com',
         notes: 'annual due to 888 13th ave...',
         type: 'Annual Due',
         method: 'Venmo',
         amount: '$100.00',
         date: '12/6/2024'
       },
       {
         name: 'John Doe',
         email: 'jd125@gmail.com',
         notes: 'polar bear plunge fundraising...',
         type: 'Donation',
         method: 'Cash/Check',
         amount: '$50.00',
         date: '10/23/2024'
       },
       {
         name: 'John Doe',
         email: 'jd123@gmail.com',
         notes: 'for a good cause...',
         type: 'Donation',
         method: 'PayPal',
         amount: '$25.00',
         date: '1/1/2025'
       }
     ],
     treasurerReport: {
       title: '2024 Angle Lake Manor Club Financial Statement',
       documentTitle: 'WASHINGTON STATE RECORDER\'S Cover Sheet',
       returnAddress: 'Kurt Nordquist 19208 39th Ave S Seattle, WA 98188',
       barcode: '20120827000664',
       documentInfo: 'RECORDS, B&M MISC PAGE 1 OF 009 08/27/2012 11:18 KING COUNTY, WA',
       documentContent: [
         'Please print or type information WASHINGTON STATE RECORDER\'S Cover Sheet (RCW 65.04)',
         'Document Title(s) (or transactions contained therein):'
       ]
     }
   }
 }

// Helper function to get the current site configuration
export const getSiteConfig = (): SiteConfig => siteConfig

// Helper function to update specific parts of the config (for future use)
export const updateSiteConfig = (updates: Partial<SiteConfig>): void => {
  Object.assign(siteConfig, updates)
}