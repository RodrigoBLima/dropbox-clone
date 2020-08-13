import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggleClose(){
    if(window.toggleActiveMenu) window.toggleActiveMenu()
  }

  return (
    <>
      <Container>
          <Navigation>
            <h1>
              <DropboxLogo />
              <span>Dropbox</span>
            </h1>
            <button className="action--close" onClick={handleToggleClose}>X</button>
          </Navigation>
          <Form>
            <span className="title">Registre-se</span>
            <span className="subtitle">Preencha o formulário abaixo</span>

            <input type="text" placeholder="Nome" name="" value=""/>
            <input type="text" placeholder="Sobrenome" name="" value=""/>
            <input type="text" placeholder="Email" name="" value=""/>
            <input type="text"placeholder="Senha" name="" value=""/>
          
            <button>Prosseguir</button>
            <span className="terms">
              Está página está sujeita à Política de privacidade e aos Termos de serviço.
            </span>
          </Form>
      </Container>
    </>
  );
}

export default MenuForm;