import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box
    }
        
	body{
		background: #FAFAFA;
		margin: 0;
		font-family: 'Inter', san-serif;
        --err-color:#ee8181;
        --pri-color:#0071eb;  
        --txt-color: #7a7978;
	}
    .big-H{
        font-size:2.5rem;
    }
    .txt-ctr{
        text-align:center;
    }
    
	
`;

export default GlobalStyle;
