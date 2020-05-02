import { fetchResponse } from './api';

describe('RESTy api', () => {
  it('can fetch a response', () => {
    // eslint-disable-next-line no-undef
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({      
        login: 'mikeymasonic',
        id: 35716186,
        node_id: 'MDQ6VXNlcjM1NzE2MTg2',
        avatar_url: 'https://avatars2.githubusercontent.com/u/35716186?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mikeymasonic',
        html_url: 'https://github.com/mikeymasonic',
        followers_url: 'https://api.github.com/users/mikeymasonic/followers',
        following_url: 'https://api.github.com/users/mikeymasonic/following{/other_user}',
        gists_url: 'https://api.github.com/users/mikeymasonic/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/mikeymasonic/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/mikeymasonic/subscriptions',
        organizations_url: 'https://api.github.com/users/mikeymasonic/orgs',
        repos_url: 'https://api.github.com/users/mikeymasonic/repos',
        events_url: 'https://api.github.com/users/mikeymasonic/events{/privacy}',
        received_events_url: 'https://api.github.com/users/mikeymasonic/received_events',
        type: 'User',
        site_admin: false,
        name: 'Michael Romay',
        company: null,
        blog: 'https://www.linkedin.com/in/michaelromay/',
        location: 'Portland, OR',
        email: null,
        hireable: true,
        bio: 'human from right now.',
      })
    });

    return fetchResponse()
      .then(response => {
        expect(response).toEqual({      
          login: 'mikeymasonic',
          id: 35716186,
          node_id: 'MDQ6VXNlcjM1NzE2MTg2',
          avatar_url: 'https://avatars2.githubusercontent.com/u/35716186?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mikeymasonic',
          html_url: 'https://github.com/mikeymasonic',
          followers_url: 'https://api.github.com/users/mikeymasonic/followers',
          following_url: 'https://api.github.com/users/mikeymasonic/following{/other_user}',
          gists_url: 'https://api.github.com/users/mikeymasonic/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/mikeymasonic/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/mikeymasonic/subscriptions',
          organizations_url: 'https://api.github.com/users/mikeymasonic/orgs',
          repos_url: 'https://api.github.com/users/mikeymasonic/repos',
          events_url: 'https://api.github.com/users/mikeymasonic/events{/privacy}',
          received_events_url: 'https://api.github.com/users/mikeymasonic/received_events',
          type: 'User',
          site_admin: false,
          name: 'Michael Romay',
          company: null,
          blog: 'https://www.linkedin.com/in/michaelromay/',
          location: 'Portland, OR',
          email: null,
          hireable: true,
          bio: 'human from right now.',
        });
      });
  });
});
