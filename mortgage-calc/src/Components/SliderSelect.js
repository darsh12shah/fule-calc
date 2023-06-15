import React from 'react';
import SliderComponent from './Common/SliderComponent';
import styled from '@emotion/styled';

const SliderSelect = ({data, setData}) => { 


  return (
    <div>
        <SliderComponent 
        
            onChange={(e, value) => {
                setData({
                    ...data,
                    homeValue: value.toFixed(0),
                })
            }}
            defaultValue={data.homeValue}
            min={0}
            max={1000}
            steps={1}
            unit="$"
            amount={data.homeValue}
            label="Cost of Hydrogen"
            value={data.homeValue}
        />

        <SliderComponent
        
            onChange={(e, value) => 
            setData({
                ...data,
                downPayment: value.toFixed(0),
               
            })
            }
            defaultValue={data.downPayment}
            min={0}
            max={100}
            steps={1}
            
            amount={data.homeValue/14}
            label="Quantity of Hydrogen"
            value={data.homeValue/14}
            unit="kg"
            

            />
            
            
      
        

       

        <SliderComponent
        //Creating the interest rate slider
            onChange={(e, value) => 
                setData({
                    ...data,
                    interestRate: value,
                })
            }
            defaultValue={data.interestRate}
            min={0}
            max={5000}
            steps={50}
            
            
            label="Mileage"
            unit="km/kg"
            amount={data.interestRate}
           
            value={data.interestRate}


        />
        
    </div>
  )
}

export default SliderSelect
