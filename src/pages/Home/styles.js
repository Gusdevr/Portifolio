import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
   

    header {
       
       width: 100vw;
       height: 7rem;
       padding: 0.625rem;
       border-bottom: 5px ridge #fff;
       

   }

   header h1 {
       color: white;
       font-weight: 700;
       line-height: 5rem;
       margin-left: 300px;
       
   }

   header p {
    color: white;
    margin-left: 450px;
    display: flex;
    line-height: 0.1rem;
    font-size: 18px;

   }

   header a {
    text-decoration: none;
    color: white;
   }

   nav ul {
    list-style: none;
    display: flex;
    margin-left: 75rem;
    gap: 40px;
    position: relative;
    bottom: 2.8rem;

   
  
    
   }

   nav ul li {
    cursor: pointer;
    font-weight: 700;

    &:hover {
       color: green;
       font-size: 20px;
      
    }

  
  

   }

   

  
`

export const AsideSection = styled.aside`
    .sec-leg {
        color: white;
        position: absolute;
        top: 350px;
        left: 300px;
        max-width: 500px;
        padding: 5px;
       
    }

   .sec-leg h1 {
  
    margin-bottom: 20px;
    text-align: justify;
    
        
    }

    .sec-leg h5 {
     font-size: 16px;
        
    }

    .sec-leg span {
        font-weight: 700;
    }

    .sec-leg p {
        max-width: 450px;
        margin-top: 20px;
        line-height: 1.5;
        
    }

    button {
        margin-top: 15px;
        padding: 8px;
        width: 150px;
        border-radius: 5px;
        background-color: white;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        

    }

  
`

export const AsideProfile = styled.aside`

    img {
        position: absolute;
        width: 400px;
        right: 20%;
        top: 300px;

    }
`
