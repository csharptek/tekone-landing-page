export interface Holiday {
  id: string
  date: string
  name: string
  description?: string
  year: number
}

export interface BirthdayPerson {
  employeeId: string
  name: string
  jobTitle?: string
  department?: string
  photoUrl?: string
  type: 'birthday'
}

export interface AnniversaryPerson {
  employeeId: string
  name: string
  jobTitle?: string
  department?: string
  photoUrl?: string
  type: 'anniversary'
  years: number
}

export interface Announcement {
  id: string
  title: string
  body: string
  date: string
  category: string
}

export interface NewsItem {
  id: string
  title: string
  summary: string
  date: string
  tag: string
}
