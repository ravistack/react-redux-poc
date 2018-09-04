import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Label} from 'react-bootstrap';
import './Filters.scss';
class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing :true,
            numberOfGuests: 20,
            products: [
                { Id: 'p1', Name: 'Product-1'},
                { Id: 'p2', Name: 'Product-2'},
                { Id: 'p3', Name: 'Product-3'},
                { Id: 'p4', Name: 'Product-4'},
                { Id: 'p5', Name: 'Product-5'},
                { Id: 'p6', Name: 'Product-6'},
                { Id: 'p7', Name: 'Product-7'},
                { Id: 'p8', Name: 'Product-8'},
                { Id: 'p9', Name: 'Product-9'},
                { Id: 'p10', Name: 'Product-10'}
            ],
            categories: [
                { Id: 'c1', Name: 'Category-1'},
                { Id: 'c2', Name: 'Category-2'},
                { Id: 'c3', Name: 'Category-3'},
                { Id: 'c4', Name: 'Category-4'},
                { Id: 'c5', Name: 'Category-5'},
                { Id: 'c6', Name: 'Category-6'},
                { Id: 'c7', Name: 'Category-7'},
                { Id: 'c8', Name: 'Category-8'},
                { Id: 'c9', Name: 'Category-9'},
                { Id: 'c10', Name: 'Category-10'}
            ],
            rules: [
                { Id: 'r1', Name: 'Rule-1'},
                { Id: 'r2', Name: 'Rule-2'},
                { Id: 'r3', Name: 'Rule-3'},
                { Id: 'r4', Name: 'Rule-4'},
                { Id: 'r5', Name: 'Rule-5'},
                { Id: 'r6', Name: 'Rule-6'},
                { Id: 'r7', Name: 'Rule-7'},
                { Id: 'r8', Name: 'Rule-8'},
                { Id: 'r9', Name: 'Rule-9'},
                { Id: 'r10', Name: 'Rule-10'}
            ]
        }
    }

    render() {
        const { products, rules, categories } = this.state;
        return (
            <form className='FormFilter'>
                <h5>
                    <strong>Type</strong>
                </h5>
                <Checkbox>
                  DQ
                </Checkbox>
                <Checkbox>
                  Technical
                </Checkbox>
                <Checkbox>
                  Categorie
                </Checkbox>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Product</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    {
                        products.map((product, index) => {
                            return(
                                <option value={product.Id}>{product.Name}</option>
                            )
                        })
                    }
                    <option value="other">product-1</option>

                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Category</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    {
                        categories.map((category, index) => {
                            return(
                                <option value={category.Id}>{category.Name}</option>
                            )
                        })
                    }
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Rule</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    {
                        rules.map((rule, index) => {
                            return(
                                <option value={rule.Id}>{rule.Name}</option>
                            )
                        })
                    }
                  </FormControl>
                </FormGroup>
            </form>
        );
    }
}

export default Filters;