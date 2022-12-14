import React from 'react'
import {render} from 'calculator-test-utils'
import CalculatorDisplay from '../calculator-display'
import {light} from '../../themes'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="hello" />, {
    theme: light,
  })
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div>
      <div
        class="emotion-0 emotion-1"
      >
        <div
          class="AutoScalingText"
          data-testid="total"
          style="transform: scale(2,2);"
        >
          NaN
        </div>
      </div>
    </div>
  `)
})
