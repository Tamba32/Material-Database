import React from 'react';

class Form extends React.Component {
  
   handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };
  
  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    }
    
    if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
      return false;
    }

    $.ajax({
      url: '/some/url',
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: function(data) {
        if (confirm('Thank you for your message. Can I erase the form?')) {
          document.querySelector('.form-input').val('');
        }
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
        alert('There was some problem with sending your message.');
      }
    });
    
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  render() {
    return (
      <form>
        <table className="">
          <tbody>
            <tr>
              <th>
                <label for="id_name">Name contains:</label>
              </th>
              <td>
                <input type="text" name="name" id="id_name" ref='formName' 
                 onChange={this.handleChange} value={this.state.name}/>
              </td>
            </tr>
          </tbody> 
        </table>
      </form>
    );
  }
}

export default Form;