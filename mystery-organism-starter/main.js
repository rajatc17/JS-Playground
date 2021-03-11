// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum,dna)=>{
  return {
    specimenNum,dna,
    mutate(){
      let randomIndex = Math.floor(Math.random()*this.dna.length)
      const dnaBases = ['A', 'T', 'C', 'G'];
      this.dna[randomIndex] = dnaBases.filter(x=>x!=this.dna[randomIndex])[Math.floor(Math.random()*3)]
    },
    compareDNA(ob){
      let match=0
      for(let i=0 ;i<15 ; i++){
        if(this.dna[i] === ob.dna[i]){
          match++;
        }
      }
      console.log(`Specimen #${this.specimenNum} and Specimen #${ob.specimenNum} have ${(match/15)*100}% DNA in common`)
    },
    willLikelySurvive(){
      let rate = 0
      for(let i=0 ;i<this.dna.length ; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          rate++;
      }
    }
    //console.log(`${rate} ${this.dna.length} ${rate/this.dna.length}`)
    return (rate/this.dna.length) >= 0.6
  }
}
}

const createSurvivingSpecimens = num =>{
  let survivable = []
  let i = 0
  while(true){
    let creation = pAequorFactory(i,mockUpStrand())
    if(creation.willLikelySurvive()){
      survivable.push(creation)
      i++
    }
    if(i===num){
      break
    }
    delete creation
  }

  return survivable
}
let specimens = createSurvivingSpecimens(2)
console.log(specimens)