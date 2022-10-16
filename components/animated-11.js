import React from 'react'

import PropTypes from 'prop-types'

const Animated11 = (props) => {
  return (
    <>
      <div className={`animated-11-container ${props.rootClassName} `}>
        <div className="animated-11-code-embed">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>\r\n<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_Zo9feTljq8.json"  speed="0.3"\r\n    style="width: 100%; height: 100%;" background="transparent"  loop autoplay></lottie-player>',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .animated-11-container {
            display: flex;
            position: relative;
          }
          .animated-11-code-embed {
            width: 558px;
            height: 590px;
            padding-left: Infinitypx;
          }

          @media (max-width: 479px) {
            .animated-11-code-embed {
              width: auto;
              height: 508px;
            }
          }
        `}
      </style>
    </>
  )
}

Animated11.defaultProps = {
  rootClassName: '',
}

Animated11.propTypes = {
  rootClassName: PropTypes.string,
}

export default Animated11
