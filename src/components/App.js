import React, {Component} from 'react';
import marked from 'marked';

const placeholder = `# H1 Title 
## H2 Title

### Code block
\`\`\`
{
  "firstName": "Vee",
  "lastName": "GM",
  "age": 25
}
\`\`\`
Some \`<em>inline code</em>\` example
https://codepen.io/valeriegm
> Some Block Quote
- Some List Item

Some **Bold** Text

#### Some Image
![Some Image](https://www.desktopbackground.org/download/1024x600/2010/04/27/8363_beautiful-snake-wallpapers-for-your-pc_1024x768_h.jpg)
`;

const Header = (props) => {
  return (
    <div className="header">
      <span>{props.headerText}</span>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  };
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div className="main row">
        <div className="editor col-4">
          <Header headerText="Editor" />
          <textarea 
            id="editor"
            value={this.state.text}
            onChange={this.handleChange}></textarea>
        </div>
        <div className="previewer col-4">
          <Header headerText="Previewer" />
          <div id="preview"
            dangerouslySetInnerHTML={{__html: marked(this.state.text, {breaks: true})}}
            ></div>
        </div>
      </div>
    );
  }
}

export default App;
