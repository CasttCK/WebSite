// TODO
// Arrumar um jeito para que a alteração de background funcione com o HTMLElement

class HeaderPersonalizado extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML=`
            <header id="header">
                <div class="textoHeader" id="nome">
                    <a href="/index.html">Vinicius Kronemberger</a>
                </div>
                <nav>
                    <ul class="listHeader">
                        <li class="listOptions">
                            <a class="textoHeader" href="/Pages/Sobre/sobre.html">Sobre</a>
                        </li>
                        <li class="listOptions">
                            <a class="textoHeader" href="/Pages/Curriculo/curriculo.html">Currículo</a>
                        </li>
                        <li class="listOptions">
                            <a class="textoHeader" href="/Pages/Blog/blog.html">Blog</a>
                        </li>
                        <li class="listOptions">
                            <a class="textoHeader" href="/Pages/Contato/contato.html">Entre em contato</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <a href="https://github.com/CasttCK" target="_blank">
                        <img id="logoGithub" src="/Assets/Images/Photos/githubLogo.png" alt="logo do GitHub">
                    </a>
                </div>
            </header>

            <style>
                header{
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 2;
                    width: 100%;
                    height: 75px;
                    background-color: rgba(39, 39, 39, 0.521);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: background-color 0.3s ease;
                }
                
                .listHeader{
                    list-style: none;
                    display: flex;
                    align-items: center;
                    height: 100%;
                    margin: 0;
                }
                
                .listOptions{
                    margin-right: 20px;
                }
                
                #nome{
                    margin-left: 20px;
                }
                
                .textoHeader{
                    color: #fff;
                    text-decoration: none;
                    font-size: large;
                }
                
                a{
                    color: #fff;
                    text-decoration: none;
                    font-size: large;
                }
                
                #logoGithub {
                    max-width:50px;
                    max-height:50px;
                    width: auto;
                    height: auto;
                    margin-right: 20px;
                    border-radius: 8px;
                }
            </style>
        `
    }
}

customElements.define('header-personalizado', HeaderPersonalizado);