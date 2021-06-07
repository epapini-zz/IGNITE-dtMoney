import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto; // sempre centralizando

  padding: 2rem 1rem 12rem; //1rem equivale ao font-size do html (setado no global)

  button {
    font-size: 1rem;
    background: var(--blue-light);
    color: var(--shape);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9); //hakerzinho: escurece todo o componente
    }
  }
`;
