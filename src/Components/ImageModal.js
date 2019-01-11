import React from 'react';
import { Button, Header, Icon, Modal, Card, Image } from 'semantic-ui-react';

class CustomModal extends React.Component {
  render() {
    const { index, value, ...props } = this.props;
    return (
      <div {...props} style={{ margin: '5px' }}>
        <Card>
          <Image src={value.thumb} height="100px" />
          <Card.Content style={{ textAlign: 'center' }}>
            <Card.Header>{value.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <ImageModal imageSrc={value.thumb} name={value.name} />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const ImageModal = props => (
  <Modal trigger={<Button fluid>Show 3D View</Button>} closeIcon>
    <Header icon="archive" content={props.name} />
    <Modal.Content style={{ margin: 'auto' }}>
      <Image src={props.imageSrc} height="400px" width="100%" />
    </Modal.Content>
  </Modal>
);

export default CustomModal;
