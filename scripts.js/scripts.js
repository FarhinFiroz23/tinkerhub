let count = 0;
        let count2  = 2;
        count+=count2;
        console.log(count)
        function myfunc(param1)
        {count += count2;
            console.log('hello ${param1}. your count is : ${count}.youre welcome')
        }
        function changeButton(){
            if(document.getElementById('subsBut').innerText === 'subscribe'){
                document.getElementById('subsBut').innerText = 'subscribed';
                document.querySelector('subsBut').classList.remove()
                
            }
            
            
           
        }

       
       // myfunc()