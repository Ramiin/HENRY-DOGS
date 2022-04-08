const initialState = {
    dogs: [],
    dog: [],
    temps: [],
    totalDogs:[]
   
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogs: action.payload,
                totalDogs: action.payload
            }
            
        case 'GET_DOG':
            return {
                ...state,
                dog: action.payload
            }
        
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temps: action.payload
            }
        case 'POST_DOG':
                return {
                    ...state,
                    dogs: state.dogs.concat(action.payload)
                }
        case 'SEARCH':
             return {
                ...state,
                 dogs: action.payload
                    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////>>>>>> START>ORDER
        case 'ORDER':
            const {temperament, breed, order } = action.payload
            const allDogs = [...state.totalDogs]

            const tempFiltered = function(){

                //1 0 0
                if(temperament && !breed && !order){
                    if(temperament==='alltemps') return allDogs;
                    return allDogs.filter(el => el.temperament?.includes(temperament))       
                }



                //0 1 0
                if(!temperament && breed && !order){
                    if(breed==='allbreeds') return allDogs;
                    if(breed === 'api') return allDogs.filter(el => !el.onDb)
                    if(breed === 'community') return allDogs.filter(el => el.onDb) 
                }

                
                //0 1 1
                if(!temperament && breed && order){
                    if(breed==='allbreeds' || breed==='') {
                        if(order==='none' || order === ''){
                            return allDogs;
                        }

                        if(order ==='az'){
                            return allDogs.sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='za'){
                            return allDogs.sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }

                        if(order ==='wmin-minmax'){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='wmin-maxmin'){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }

                        if(order ==='wmax-minmax'){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='wmax-maxmin'){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }
                    }
                    
                    if(breed==='api'){ ///////////////////////////////////API
                        if(order==='none' || order === ''){
                            return allDogs.filter(el => !el.onDb);
                        }

                        if(order ==='az'){
                            return allDogs.filter(el => !el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='za'){
                            return allDogs.filter(el => !el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }

                        if(order ==='wmin-minmax'){
                            return allDogs.filter(el => !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='wmin-maxmin'){
                            return allDogs.filter(el => !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }

                        if(order ==='wmax-minmax'){
                            // console.log('Entro a minmax')
                            return allDogs.filter(el => !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='wmax-maxmin'){
                            // console.log('Entro a maxmin')
                            return allDogs.filter(el => !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }
                    }

                    if(breed === 'community'){  /////////////////////////DB
                        if(order==='none' || order === ''){
                            return allDogs.filter(el => el.onDb);
                        }

                        if(order ==='az'){
                            return allDogs.filter(el => el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='za'){
                            return allDogs.filter(el => el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }

                        if(order ==='wmin-minmax'){
                            return allDogs.filter(el => el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='wmin-maxmin'){
                            return allDogs.filter(el => el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }

                        if(order ==='wmax-minmax'){
                            // console.log('Entro a minmax')
                            return allDogs.filter(el => el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }

                        if(order ==='wmax-maxmin'){
                            // console.log('Entro a maxmin')
                            return allDogs.filter(el => el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }
                    }
                }



                //1 0 1
                if(temperament && !breed && order){

                    if(order==='none' || order === ''){
                        return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                      }

                    if(order==='az'){
                        if(temperament==='alltemps' || temperament==='') {
                            return allDogs.sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }
                        return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                      }
                      if(order==='za') {
                        if(temperament==='alltemps' || temperament==='') {
                            return allDogs.sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                        }
                        return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                    }
                    if(order==='wmin-minmax') {
                        if(temperament==='alltemps' || temperament===''){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }
                        return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                        
                        
                    }
                    if(order==='wmin-maxmin') {
                        if(temperament==='alltemps' || temperament===''){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                        }
                        return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()

                    }
                    if(order==='wmax-minmax') {
                        if(temperament==='alltemps' || temperament===''){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }
                        return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });

                    }
                    if(order==='wmax-maxmin') {
                        if(temperament==='alltemps' || temperament===''){
                            return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse();
                        }
                        return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse();
                    }

                }
                //0 0 1
                if(!temperament && !breed && order){
                    if(order==='none' || order==='') return allDogs;

                    if(order === 'az') {
                        return allDogs.sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                    } ;
                    if(order === 'za') {
                        return allDogs.sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse();
                    } 
                    
                    if(order === 'wmin-minmax') {
                        return allDogs.sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                    }

                    if(order === 'wmin-maxmin') {
                        return allDogs.sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse();
                    }

                    if(order === 'wmax-minmax') {
                        return allDogs.sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                    }

                    if(order === 'wmax-maxmin') {
                        return allDogs.sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse();
                    }
                    
                }

                //1 1 0
                if(temperament && breed && (!order || order==='none')){
                    if(temperament==='alltemps') {
                        if(breed === 'allbreeds') return allDogs;
                        if(breed === 'community') return allDogs.filter(el =>  el.onDb) 
                        if(breed === 'api') return allDogs.filter(el =>  !el.onDb)  
                          
                    }
                    if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb)
                    if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb)   
                    if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament))                      
                }
                //1 1 1
                if(temperament && breed && order){

                    if(order==='none') {
                        if(temperament==='alltemps') {
                            if(breed === 'allbreeds' || breed === '') return allDogs;
                            if(breed === 'community') return allDogs.filter(el =>  el.onDb) 
                            if(breed === 'api') return allDogs.filter(el =>  !el.onDb)  
                        }
                        if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb)
                        if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb)   
                        if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament))             
                    }


                    if(order==='az') {
                        if(temperament==='alltemps') {
                            if(breed === 'allbreeds') return allDogs.sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                            if(breed === 'community') return allDogs.filter(el =>  el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }); 
                            if(breed === 'api') return allDogs.filter(el =>  !el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });  
                        }
                        if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                        if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });   
                        if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }); 
                    }
                    if(order==='za'){
                        if(temperament==='alltemps') {
                            if(breed === 'allbreeds') return allDogs.sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                            if(breed === 'community') return allDogs.filter(el =>  el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                            if(breed === 'api') return allDogs.filter(el =>  !el.onDb).sort((a, b)=>{
                                let fa = a.name.toLowerCase(),
                                    fb = b.name.toLowerCase();
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                        }
                        if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                        if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse() 
                        if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = a.name.toLowerCase(),
                                fb = b.name.toLowerCase();
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                    }


                    if(order==='wmin-minmax'){
                        if(temperament==='alltemps') {
                            if(breed === 'allbreeds') return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                            if(breed === 'community') return allDogs.filter(el =>  el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                            if(breed === 'api') return allDogs.filter(el =>  !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }
                        if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                        if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                        if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                    
                    }



                    if(order==='wmin-maxmin') {
                        if(temperament==='alltemps') {
                            if(breed === 'allbreeds') return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                            if(breed === 'community') return allDogs.filter(el =>  el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                            if(breed === 'api') return allDogs.filter(el =>  !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(0,2)),
                                    fb = parseInt(b.weight?.slice(0,2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                        }
                        if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                        if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                        if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(0,2)),
                                fb = parseInt(b.weight?.slice(0,2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                    }

                    if(order==='wmax-minmax') {
                        if(temperament==='alltemps') {
                            if(breed === 'allbreeds') return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                            if(breed === 'community') return allDogs.filter(el =>  el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                            if(breed === 'api') return allDogs.filter(el =>  !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }
                        if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                        if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                        if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        });
                    }

                    if(order==='wmax-maxmin') {
                        if(temperament==='alltemps') {
                            if(breed === 'allbreeds') return allDogs.sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                            if(breed === 'community') return allDogs.filter(el =>  el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).reverse()
                            if(breed === 'api') return allDogs.filter(el =>  !el.onDb).sort((a, b)=>{
                                let fa = parseInt(a.weight?.slice(-2)),
                                    fb = parseInt(b.weight?.slice(-2));
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            });
                        }
                        if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                        if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                        if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                    }
                    if(temperament==='alltemps') {
                        if(breed === 'allbreeds') return allDogs.sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                        if(breed === 'community') return allDogs.filter(el =>  el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                        if(breed === 'api') return allDogs.filter(el =>  !el.onDb).sort((a, b)=>{
                            let fa = parseInt(a.weight?.slice(-2)),
                                fb = parseInt(b.weight?.slice(-2));
                                if(fa<fb) return -1;
                                if(fa>fb) return 1;
                                return 0;
                        }).reverse()
                    }
                    if(breed === 'api') return allDogs.filter(el => el.temperament?.includes(temperament) && !el.onDb).sort((a, b)=>{
                        let fa = parseInt(a.weight?.slice(-2)),
                            fb = parseInt(b.weight?.slice(-2));
                            if(fa<fb) return -1;
                            if(fa>fb) return 1;
                            return 0;
                    }).reverse()
                    if(breed === 'community') return allDogs.filter(el => el.temperament?.includes(temperament) && el.onDb).sort((a, b)=>{
                        let fa = parseInt(a.weight?.slice(-2)),
                            fb = parseInt(b.weight?.slice(-2));
                            if(fa<fb) return -1;
                            if(fa>fb) return 1;
                            return 0;
                    }).reverse()
                    if(breed === 'allbreeds') return allDogs.filter(el => el.temperament?.includes(temperament)).sort((a, b)=>{
                        let fa = parseInt(a.weight?.slice(-2)),
                            fb = parseInt(b.weight?.slice(-2));
                            if(fa<fb) return -1;
                            if(fa>fb) return 1;
                            return 0;
                    }).reverse()
                }

                return allDogs;
            }()

                return {
                    ...state,
                    dogs: tempFiltered
                }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7 >>>>>< END ORDER

        default:
            return state;
    };
};

export default rootReducer;