
const fs = require('fs');

const filepath = '12/'

let arr = [
  'A Discovery',
  'An Interview',
  'A Controversy',
  'The Party',
  'The Studio',
  'Progression',
  'The Excursion',
  'The Present',
  'A Snake in the Grass',
  'A Contract and a Quarrel',
  'The Vicar Again',
  'A Tête-à-Tête and a Discovery',
  'A Return to Duty',
  'An Assault',
  'An Encounter and its Consequences',
  'The Warnings of Experience',
  'Further Warnings',
  'The Miniature',
  'An Incident',
  'Persistence',
  'Opinions',
  'Traits of Friendship',
  'First Weeks of Matrimony',
  'First Quarrel',
  'First Absence',
  'The Guests',
  'A Misdemeanour',
  'Parental Feelings',
  'The Neighbour',
  'Domestic Scenes',
  'Social Virtues',
  'Comparisons: Information Rejected',
  'Two Evenings',
  'Concealment',
  'Provocations',
  'Dual Solitude',
  'The Neighbour Again',
  'The Injured Man',
  'A Scheme of Escape',
  'A Misadventure',
  '“Hope Springs Eternal in the Human Breast”',
  'A Reformation',
  'The Boundary Past',
  'The Retreat',
  'Reconciliation',
  'Friendly Counsels',
  'Startling Intelligence',
  'Further Intelligence',
  '',
  'Doubts and Disappointments',
  'An Unexpected Occurrence',
  'Fluctuations',
  'Conclusion'
]

let chapters = []
for(let i=1; i<=53; i++){
  //fs.writeFileSync(filepath+i+'.mdx', "---\n---\n---\ntitle: "+arr[i-1]+"\n---\n\n");
  chapters.push({"slug": "en/"+filepath+i, "title": i+ " "+arr[i-1]})
}

console.log(chapters)