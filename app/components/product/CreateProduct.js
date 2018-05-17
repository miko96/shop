import React, { Component } from 'react';
import { post } from 'axios';


class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      file: null,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescrChange = this.handleDescrChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleNameChange({ target }) {
    this.setState({ name: target.value });
  }

  handleDescrChange({ target }) {
    this.setState({ description: target.value });
  }

  handleFileChange({ target }) {
    this.setState({ file: target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.uploadFile()
      .then(r => r);
  }

  uploadFile() {
    const url = 'http://localhost:8181/api/products/create';
    const formData = new FormData();
    formData.append('File', this.state.file);
    formData.append('Name', this.state.name);
    formData.append('Description', this.state.description);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Descr:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleDescrChange}
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            name="imageFile"
            onChange={this.handleFileChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateProduct;
