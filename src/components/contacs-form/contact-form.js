import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // Изменение свойств
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  // проверка пустые поля или нет
  isFieldEmpty = name => {
    if (name === '') {
      alert(`All fields must be completed`);
      return true;
    }
  };

  // Добавление нового контатка в список
  handleAddContacts = e => {
    e.preventDefault();
    if (
      this.isFieldEmpty(this.state.name) ||
      this.isFieldEmpty(this.state.number)
    ) {
      return;
    }
    const namesArray = this.props.contacts.map(c => c.name.toLowerCase());
    if (namesArray.includes(this.state.name.toLowerCase())) {
      const i = namesArray.indexOf(this.state.name.toLowerCase());
      alert(`"${this.props.contacts[i].name}" is already in contacts`);
      return;
    }

    this.props.onCreateContacts(this.state.name, this.state.number);
    this.reset();
  };

  // Обнуление значений формы
  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    return (
      <>
        <form>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleAddContacts}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
