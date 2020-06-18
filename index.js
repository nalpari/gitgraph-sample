import { createGitgraph } from '@gitgraph/js';

const graphContainer = document.getElementById('gitgraph');
const config = {
  commit: {
    message: {
      displayAuthor: false,
    }
  }
}
const gitgraph = createGitgraph(graphContainer);

const master = gitgraph.branch('master');
master.commit({
  subject: 'init the project',
  author: 'yoosw <yoosw@3top.co.kr>'
});

master.commit({
  subject: 'Add README',
  author: 'yoosw <yoosw@3top.co.kr>'
});
master.tag('1.0');

const develop = master.branch('develop');
develop.commit({
  subject: 'develop branch init',
  author: 'yoosw <yoosw@3top.co.kr>'
});

const featureOne = develop.branch('feature/feature-01');
featureOne.commit({
  subject: '로그인 기능 추가',
  author: 'yoosw <yoosw@3top.co.kr>'
});

const featureTwo = develop.branch('feature/feature-02');
featureTwo.commit({
  subject: '회원가입 기능 추가',
  author: 'suomi <suomi@3top.co.kr>'
});

develop.merge({
  branch: featureTwo,
  fastForward: false,
  commitOptions: {
    subject: '회원가입 기능 추가',
    author: 'suomi <suomi@3top.co.kr>'
  }
});

featureTwo.commit({
  subject: '',
  author: 'suomi <suomi@3top.co.kr>'
});

const featureThree = develop.branch('feature/feature-03');
featureThree.commit({
  subject: '메인페이지 작업',
  author: 'suomi <suomi@3top.co.kr>'
});
