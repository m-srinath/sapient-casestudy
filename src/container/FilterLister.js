import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Badge } from 'reactstrap';
import ShowFilters from './ShowFilters';
import ShowSelectedFilters from './ShowSelectedFilters';

import ShowResult from './ShowResult';

class FilterLister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilterList: []
        }
    }

    onCheckboxSelectHandler = (e) => {
        let { name, value } = e.target;
        selectedFilterList.push(value);
        
        this.setState({
            [name]: value,
            selectedFilterList
        })
    }
    
    render() {
        let checkboxSpeciesList = ['Human', 'Mythology', 'Other Spec'];
        let checkboxGenderList = ['Male', 'Female'];
        let checkboxOriginList = ['Unknown', 'Post-Apocalyptic Earth', 'Nuptia 4'];
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xs="3">
                            <ShowFilters headerName="Species" checkboxList={checkboxSpeciesList} onClick={this.onCheckboxSelectHandler}/>
                        </Col>
                        <Col xs="9">
                            <span>
                                Selected Filters
                            </span>
                            <div>
                                <Row>
                                    <ShowSelectedFilters selectedFilterList={this.state.selectedFilterList}/>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3">
                            <ShowFilters headerName="Gender" checkboxList={checkboxGenderList} onClick={this.onCheckboxSelectHandler}/>
                        </Col>
                        <Col xs="9">
                            <Row>
                                <ShowResult />
                            </Row>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3">
                            <ShowFilters headerName="Species" checkboxList={checkboxOriginList} onClick={this.onCheckboxSelectHandler}/>
                        </Col>
                        <Col xs="9">
                            <Row>
                                <ShowResult />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { formHandlingData } = state;
    return {
        formValue: formHandlingData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // formHandler: bindActionCreators(formHandler, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLister);



/*
const FilterLister = (props) => {
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Container>
            <Row>
                <Col xs="3">
                    <FilterComponent headerName="Species" checkboxList={checkboxSpeciesList}/>
                </Col>
                <Col xs="9">
                    <span>
                        Selected Filters
                    </span>
                    <div>
                        <Badge color="secondary">Female</Badge>
                    </div>
                    
                </Col>
            </Row>
            <Row>
                <Col xs="3">
                    <FilterComponent headerName="Gender" checkboxList={checkboxGenderList}/>
                </Col>
                <Col xs="9">
                </Col>
            </Row>
            <Row>
                <Col xs="3">
                    <FilterComponent headerName="Species" checkboxList={checkboxOriginList}/>
                </Col>
                <Col xs="9">
                </Col>
            </Row>
        </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
    const { formHandlingData } = state;
    return {
        formValue: formHandlingData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // formHandler: bindActionCreators(formHandler, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLister);
*/