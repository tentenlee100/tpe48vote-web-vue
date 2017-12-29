const ApiUrl = (process.env.NODE_ENV === 'production') ?
{
  getGirl: "./api/getGirl",
  workIndex: "./api/workIndex",
  getVote: "./api/getVote",
  getWorkDetail: "./api/getWorkDetail",
  memberDetail: "./api/memberDetail",
  liveMeHistory: "./api/liveMeHistory",



}
:
{
  getGirl: "http://localhost:7171/tpe48vote/api/getGirl",
  workIndex: "http://localhost:7171/tpe48vote/api/workIndex",
  getVote: "http://localhost:7171/tpe48vote/api/getVote",
  getWorkDetail: "http://localhost:7171/tpe48vote/api/getWorkDetail",
  memberDetail: "http://localhost:7171/tpe48vote/api/memberDetail",
  liveMeHistory: "http://localhost:7171/tpe48vote/api/liveMeHistory",

}

export default ApiUrl
