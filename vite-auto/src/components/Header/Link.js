



export class Link extends HTMLElement {
 
  constructor(){
    super();
    this.attachShadow({mode:'open'});

    this.href = this.getAttribute('to') || '/'
    this.label = this.textContent || ''

    this.render();
    
  }

  render(){

    this.shadowRoot.innerHTML = `
     <style>
        a {
          color: inherit;
          text-decoration: none;
          position:relative;
        }
        a:hover,
        a.active{
          color: red;
        }

        a::after{
          content: '';
          position:absolute;
          left:0;
          bottom:0;
          width: 0;
          height:4px;
          background:red;
          transition:all .5s;
        }
        a:hover::after,
        a.active::after{
          width:100%;
        }
      </style>
      <li><a href="${this.href}">${this.label}</a></li>
    `
  }
  
}



customElements.define('header-link',Link)
