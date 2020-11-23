const EspacenetURL = (docdb_number, kind, date) => (
  docdb_number  &&
  kind          &&
  date          &&
  kind != 'D0'  &&
  kind != 'A0'  &&
  kind != 'MPP' &&
  `http://worldwide.espacenet.com/publicationDetails/biblio?DB=worldwide.espacenet.com&II=0&ND=3&adjacent=true&locale=en_EP&FT=D&date=${date.replace(/-/g, '')}&CC=${docdb_number.substr(0, 2)}&NR=${docdb_number.substr(2)}${kind}&KC=${kind}`
)

export default EspacenetURL
