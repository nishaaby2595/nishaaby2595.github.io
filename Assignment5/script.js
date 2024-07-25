
//Part A
$('#calculate').click(function(){
    const LMass = parseFloat($('#LMass').val());
    const LHeight = parseFloat($('#Lheight').val());
    const PMass = parseFloat($('#PMass').val());
    const PHeight = parseFloat($('#PeterHeight').val());
    
    const LBMI =  LMass / (LHeight * LHeight);
    const PBMI =  PMass / (PHeight * PHeight);

    const lucasHigherBMI =  LBMI > PBMI ;
    
    let resultMessage = `The BMI of Peter is ${PBMI.toFixed(2)}, The BMI of Lucas is ${LBMI.toFixed(2)}, `;
    resultMessage += `Peter’s BMI is higher than Lucas’s BMI: ${!lucasHigherBMI}`;
    console.log('PART A')
    console.log(resultMessage);
    
    //Part C
    
    if (lucasHigherBMI) {
        resultMessage = `Lucas' BMI (${LBMI.toFixed(2)}) is higher than Peter’s BMI (${PBMI.toFixed(2)})!`;
        console.log('PART C');
        console.log(resultMessage);
    } else {
        resultMessage = `Peter's BMI (${PBMI.toFixed(2)}) is higher than Lucas’s BMI (${LBMI.toFixed(2)})!`;
        console.log('PART C');
        console.log(resultMessage);
    }

    
    $('#msg').text(resultMessage);
    })
    
    //Part B
    
    $('#Convert').click(function(){
        const Var1 = parseFloat($('#Celvar').val());
    
        const Convert = parseFloat((Var1 * 9/5) + 32 );

        $('#Farvar').val(Convert.toFixed(1));
        
        let resultMessage1 = `${Var1.toFixed(1)} °C is  ${Convert.toFixed(1)} °F `;
        console.log('PART B')
        console.log(resultMessage1);
        $('#message').text(resultMessage1);
    })


     $('#Convert1').click(function(){

        
        const Var2 = parseFloat($('#farvar1').val());
        
        const convert1 = parseFloat((Var2 -32)*5/9);
        
    
        $('#celvar1').val(convert1.toFixed(1));
        
        let resultMessage2 = `${Var2.toFixed(1)} °F is  ${convert1.toFixed(1)} °C `;
        console.log('PART B')
        console.log(resultMessage2);
        
        $('#message1').text(resultMessage2);



          
        // part d
        console.log('PART D')
        console.log('conversion of temperature Array from °C to °F and °F to °C'  )
    
        const ConvertCelsiusToFahrenheit =(ctemp) => {
            const fval = (ctemp *9/5)+32;
            console.log(`${ctemp}°C is ${fval} °F`)
        };
        const ConvertFahrenheitToCelsius = (ftemp) =>{
            const cval = (ftemp - 32)* 5/9;
            console.log(` ${ftemp}°F is ${cval}°C`)
        };
    
        const CelsiusArr =[100,0,10];
        const FarenArr=[32,10,102];
    
        CelsiusArr.forEach(temp => ConvertCelsiusToFahrenheit(temp));
        FarenArr.forEach(temp => ConvertFahrenheitToCelsius(temp));
        })
    
  
    
    
    
    
    