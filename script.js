nav{
    display: flex;
  justify-content: space-between;
  background-color: rgb(47, 47, 47);
  height:80px;
}
nav h1{
    color:white;
    font-family: sans-serif;
    font-weight: bolder;
    padding-left: 20px;
    padding-top: 10px;
}
span{
    color:grey;
}
.be{
     color:khaki;
    position: absolute;
    bottom: 20px;
    font-size: 50px;
    text-shadow: 2px 3px 2px white;
}
nav a{
    font-family: sans-serif;
    font-weight: bolder;
    padding-right: 20px;
    color:lightgray;
    text-decoration:none;
    font-size: 30px;
    padding-top: 20px;
}
section{
    display: flex;
    justify-content: space-between;
}
body{
    text-align: center;
    background-color: rgb(63, 63, 63);
    font-family: sans-serif;
    color:lightgray
}

.knopka{
    background-color: white;
    border:1px solid white;
    border-radius: 25px;
    height:20px;
    margin-top: 15px;
    padding: 20px;
    margin-right: 5px;
    padding-top: 5px;
}


  .bd{
   margin-top:150px;
  }
        section {
            display: flex;
            justify-content: space-between;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
           margin-left: 150px;
            width: 75%;

        }
        article {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 15px;
            width: 280px;
            height: auto;
            text-align: center;
            transition: transform 0.3s ease;
        }
        article:hover {
            transform: translateY(-5px);
        }
      article  img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
        p {
            font-size: 14px;
            color: #333;
            margin: 10px 0;
            text-align: left;
        }
        button {
            background-color: #28a745;
            color: #fff;
            border: none;
            margin: 10px;
            padding: 10px 15px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background: #218838;
        }
        .b3{
            text-align: center;
            font-size: 30px;
            color:khaki
        }
        footer p{
            text-align: center;
            font-size: 30px;
            color:khaki
        }
        article:hover{
           background-color: khaki;
        }
      
  
          .buttons {margin-left: 100px;
            white-space: nowrap;
            min-height: 33px;
          
            width: 200px;
            margin: 0 auto;
            transform: scale(3);
          }
          
   
       input{
        padding: 10px;
        background-color: #3b2751;
        border: khaki 2px solid;
        
       } 
       .forma{
        display:
       }
       
       form {
        margin-top: 30px;
        background-color: #fff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }
    input[type="text"],
    input[type="tel"],
    input[type="email"],
    select {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type="radio"] {
        margin-right: 8px;
    }
    label {
        font-size: 14px;
        color: #333;
    }
    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
    }
    input[type="submit"]:hover {
        background-color: #45a049;
    }
    .radio-group {
        display: flex;
        flex-direction: column;
    } 
    .cart { margin-top: 20px; padding: 20px; background: #f8f8f8; }
    .cart.hidden { display: none; }
