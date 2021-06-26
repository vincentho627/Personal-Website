import React from 'react';

function LanguageIcons(props) {

  function generateIcons() {
    const icons = [];
    for (var i = 0; i < props.languages.length; i++) {
      switch (props.languages[i]) {
        case "Python":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/python.png"} alt="python pic"/>);
          break;
        case "Java":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/java.png"} alt="java pic"/>);
          break;
        case "Javascript":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/javascript.png"} alt="javascript pic"/>);
          break;
        case "Html":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/html-5.png"} alt="html pic"/>);
          break;
        case "css":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/css.png"} alt="css pic"/>);
          break;
        case "C":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/c.png"} alt="c pic"/>);
          break;
        case "C#":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/csharp.png"} alt="c# pic"/>);
          break;
        case "Unity":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/unity.png"} alt="unity pic"/>);
          break;
        case "Flutter":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/flutter.png"} alt="flutter pic"/>);
          break;
        case "Dart":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/dart.svg"} alt="dart pic"/>);
          break;
        case "Firebase":
          icons.push(<img className="language" src={process.env.PUBLIC_URL + "/img/firebase.png"} alt="firebase pic"/>);
          break;
        default:
          break;
      }
    }
    return icons;
  }

  var icons = generateIcons();

  return (<div>
    {icons}
  </div>)
}

export default LanguageIcons;
