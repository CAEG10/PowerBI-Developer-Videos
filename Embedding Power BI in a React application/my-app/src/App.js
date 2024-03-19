import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'a7ab29a3-02c7-4c45-81a8-e756e9897d79',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=a7ab29a3-02c7-4c45-81a8-e756e9897d79&groupId=80341867-c2f8-41d8-8c92-ed42fd7dccc2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWV9fQ%3d%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTMwZjZkMDItODFiZC00ZWQ3LTg0ODktOTgxNTQ3MjEzZTJhLyIsImlhdCI6MTcxMDg4OTMxMiwibmJmIjoxNzEwODg5MzEyLCJleHAiOjE3MTA4OTM4ODYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFBYk5FU2VXU3Z5cFZmTFlzNER2L2tPWm13S2RNRC9aeWlWYzFTTWpBMm9xTmtjQjFBbkxlcytrTGw4YmNrakVLQVk4MVNhZ290aG4yb2pXSnVNUXhGNHlVZkpIL1BaaTJuQU9mN3VUSktmcz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJFc3Bpbm96YSIsImdpdmVuX25hbWUiOiJXaWxsaWFtcyIsImlwYWRkciI6IjE2My4xMTYuMjI3LjExNyIsIm5hbWUiOiJXaWxsaWFtcyAgRXNwaW5vemEiLCJvaWQiOiJlNzJkM2QxYy1kNDNjLTRiNGEtOTEwNi1jZTYzZmUyNWE2NGYiLCJwdWlkIjoiMTAwMzIwMDMwM0U4NTVFOSIsInJoIjoiMC5BWHdBQW0wUDQ3MkIxMDZFaVpnVlJ5RS1LZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQzdBTlkuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiMnVGdnlvUUdMNC12emJWTHJ1ZjFZRVpGa1IzMERxaWJrWmFIXzh3SUpEVSIsInRpZCI6ImUzMGY2ZDAyLTgxYmQtNGVkNy04NDg5LTk4MTU0NzIxM2UyYSIsInVuaXF1ZV9uYW1lIjoid2VzcGlub3phQGNsc2JwYXkub25taWNyb3NvZnQuY29tIiwidXBuIjoid2VzcGlub3phQGNsc2JwYXkub25taWNyb3NvZnQuY29tIiwidXRpIjoiMWttckIxWlpKRTJZSDJtNWQ4ZVZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.ije1_SqCpLNNfABlDY9nbyor4jxQNp4rPMCj7d8BjWoIWJgcvRuqXrOPFT6ynhzKkwqp3qNOcLtXyIgy8liKaLPjfDZpFDnWBclxkjb_tWDPLYElu1DwPrEIaMUPD2DW-lFLZE6ezoa9Wc2UP13iJdCuKBEhYek3mCHuF7gKgr5WiQAcjGk_uJsrPMbycyRQPK8tbywnlFdMN5JW98_4wPf1gerbpBVpPATRdY2tl1pn41LqJ6YFwVeDamKQCGB5bt-ymlGJGu8qw7cOm2Re2Bf11BMXnJi7PtPvo8ZmvITGH9O6OV8eVa8tgnrtIFPtUqhS4rg9IVi5cVrwS8ylJw',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
