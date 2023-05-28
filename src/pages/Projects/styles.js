import styled from 'styled-components'

export const Container = styled.div`

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

export const List = styled.ul`
display: flex;
flex-direction: column;
text-align: center;
margin-top: 80px;
gap: 15px;
padding: 15px;




`

export const ListItem = styled.li`


border: solid 1px white;
border-radius: 8px;
list-style: none;
padding: 10px;
width: 500px;
margin: 0 auto;





`

export const Link = styled.a`
color: white;
text-decoration: none;
font-size: 25px;
text-transform: uppercase;
list-style: none;




`