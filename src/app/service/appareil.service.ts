export class AppareilService {
  appareils= [
    {
      id : 1,
      name : 'Télévision',
      status : 'éteint'
    },{
      id: 2,
      name : 'Ordinateur',
      status : 'éteint'
    },{
      id : 3,
      name : 'Machine à laver',
      status : 'allumé'
    }
  ];

  getAppareilByid(id: number){
    const appareil = this.appareils.find((appareilObject)=>{
      return appareilObject.id === id;
    });
    return appareil;
  }


  switchOnAll(){
    for (let appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  switchOfAll(){
    for (let appareil of this.appareils){
      appareil.status='éteint';
    }
  }

  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }
}
