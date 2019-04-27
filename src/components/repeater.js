import React, { PureComponent  } from 'react';

class Repeater extends PureComponent  {
    render() {
        const {
            data,
            indexPrefix,
            children,
        } = this.props;
        
        const elements = [];
        let index = 0;
        
        for (let item of data) {
            elements.push(
                React.cloneElement(children(item), {
                    key: `${indexPrefix}-${index}`,
                })
            );
            index += 1;
        }

        return (
            <React.Fragment>
                {elements}
            </React.Fragment>
        );
    }
}

export default Repeater;