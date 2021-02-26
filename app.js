  let pronoun = ['the','my','her','his','our','their','your'];
  let adj = ['west', 'cool', 'funny', 'creative', 'sad', 'smart', 'colorful', 'cloudy'];
  let noun = ['jogger','racoon', 'trees', 'map', 'people', 'sunflowervirus', 'sitcom'];
  let ext = ['com', 'net', 'org', 'co', 'us', 'com', 'es'];

  let pronounLen= pronoun.length;
  let adjLen = adj.length;
  let nounLen = noun.length;
  let extLen = ext.length;

  for (let i=0; i<pronounLen; i++){
      for (let j=0; j<adjLen; j++){
          for (let k=0; k<nounLen; k++){
              for (let l=0; l<extLen; l++){
                let url = `${pronoun[i]}${adj[j]}${noun[k]}`; 
                if (url.includes(ext[l])){
                    url = url.replace(ext[l], '');   
                }
                console.log(`${url}.${ext[l]}`);
              }
          }
      }
  }