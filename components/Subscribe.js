import {Box, Flex} from 'rebass';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import {colors} from '../theme';
import {track} from './Segment';

const MailchimpForm = styled(({placeholder, className}) => (
  <Box className={className}>
    <div id="mc_embed_signup">
      <form
        action="https://github.us19.list-manage.com/subscribe/post?u=6f67e9e97c31434230165a509&amp;id=505353ed3d"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder={placeholder}
            required
          />
          <div
            style={{position: 'absolute', left: '-5000px'}}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_6f67e9e97c31434230165a509_505353ed3d"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              onClick={() => {
                track('Subscribed');
              }}
            />
          </div>
        </div>
      </form>
    </div>
  </Box>
))`
  #mc_embed_signup {
    clear: left;
    font-size: 1rem;
    width: 100%;
  }

  #mc_embed_signup form input.email {
    border: solid 1px ${colors.gray};
    border-radius: 4px;
    padding: 16px;
    height: 52px;
    outline: none;
    margin-right: 0.5rem;
  }

  #mc_embed_signup form input.button {
    border: 0;
    border-radius: 4px;
    background-color: ${colors.primary};
    color: white;
    display: inline-block;
    font-size: 16px;
    height: 52px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }
  #mc_embed_signup form input.button:hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

export default ({title, href, ...formProps}) => (
  <Box bg="black" color="white" py={5}>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection={['column', 'row']}
    >
      <SectionTitle href={href} color="white" mr={3} mb={[4, 0]}>
        {title}
      </SectionTitle>
      <MailchimpForm {...formProps} />
    </Flex>
  </Box>
);
