import React, { useState } from 'react'

const Select = () => {
    const [select, setSelect] = useState({
        checkAll: false,
        checkOne: false,
        checkTwo: false,
        checkThree: false
    });
  return (
      <div className='checkBoxes'>
          <div>
            <p>select all</p>
              <input
                  type='checkbox'
                  name=''
                  id=''
                  checked={
                      select.checkOne && select.checkTwo && select.checkThree}
                  onClick={() =>
                      setSelect({
                          ...select,
                          checkAll: !select.checkAll,
                          checkOne: !select.checkOne,
                          checkTwo: !select.checkTwo,
                          checkThree: !select.checkThree
                      })
                  }
              />
          </div>
          select one by one
          <input
              type='checkbox'
              name=''
              id=''
              checked={select.checkOne}
              onClick={() =>
                  setSelect({
                      ...select,
                      checkOne: !select.checkOne,
                  })
              }
          />
          <input
              type='checkbox'
              name=''
              id=''
              checked={select.checkTwo}
              onClick={() =>
                  setSelect({
                      ...select,
                      checkTwo: !select.checkTwo,
                  })
              }
          />
          <input
              type='checkbox'
              name=''
              id=''
              checked={select.checkThree}
              onClick={() =>
                  setSelect({
                      ...select,
                      checkThree: !select.checkThree
                  })
              }
          />
      </div>
  );
}

export default Select
