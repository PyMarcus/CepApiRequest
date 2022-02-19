class Localize{
    static request(){
      
      
        //itens da pagina 
      
        let cep = document.getElementById('cep');
        if(cep.value != '' && cep.value.length == 8 || cep.value.length == 9){
            let rua = document.getElementById('rua');
            let bairro = document.getElementById('bairro');
            let uf = document.getElementById('uf');
            let cidade = document.getElementById('cidade');


            //chamada a api
            const urlApi = `https://viacep.com.br/ws/${cep.value}/json/`;
            console.log(urlApi)
            const req = new XMLHttpRequest();
            
            req.open('GET', urlApi); // state1 indica o método ao protocolo http

            req.send(); // state2  faz a requisição, conforme o método

            // state 3, recebe o objeto e trabalha em cima dele
            req.onreadystatechange = () => {
                let status_code = req.status
                
                if(status_code == 200){
                    let conteudo = req.response;
                    let objeto = ""
                    try{
                        objeto = JSON.parse(conteudo);// converte para json
                    }catch(SyntaxError){
                    
                    }finally{
                    
                        if(objeto.cep != undefined) cep.value = objeto.cep;
                        
                        if(objeto.logradouro != undefined) rua.value = objeto.logradouro;
                    
                        if(objeto.bairro != undefined) bairro.value = objeto.bairro;
                        
                        if(objeto.uf != undefined) uf.value = objeto.uf;
                        
                        if(objeto.localidade != undefined) cidade.value = objeto.localidade;
                    
                    }
                    
                }else{
                    alert(`Status code: ${status_code}`)
                }
           
            }
        }else{
            alert("O campo CEP deve ser preenchido")
        }
        
        //limpa valor anterior
        cep.value = '';
        rua.value = '';
        bairro.value = '';
        uf.value = '';
        cidade.value = '';
       
    }

}


