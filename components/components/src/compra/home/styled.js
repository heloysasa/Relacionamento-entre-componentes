import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 3em;


  .lista-produtos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  button {
    margin-top: 2em;
    border-radius: 2em;
    border: none;
    outline: none;
    padding: .5em 1.5em;
    
    font: 400 1em Roboto;
    background-color: #f837b2;
    color: #fff;
    cursor: pointer;
    &:hover{
      color:#ffcbdb;
      transition: 0.3s;
    }
  }

`


export { Container }