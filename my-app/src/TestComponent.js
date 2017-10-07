import React, {Component } from 'react';
import { Card, cardActions,cardHeader,CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const styles = {
    container: {
        display:'flex',
        flexWrap:'wrap',
        justifycontent:'space-around'
    },
    item: {
        margin:'20px 20px'
    }
}
const TestComponent = () => (
    <div style={styles.container}>
        <card style={styles.item}>
            </card>
            <cardHeader title="zombie land" />
            <CardText >
             HI in ocean there is lot of beautiful animals
             and also a dangerous animals who can eat
             humans so be safe in water.
             <CardText>
             </card>
             </div>
        );
export default TestComponent;