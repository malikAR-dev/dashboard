import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { InfoCircle } from "react-bootstrap-icons";
import "react-circular-progressbar/dist/styles.css";

const progressbarStyle = {
  textColor: "#fcfdfd",
  textSize: "100%",
  rotation: 1 / 2 + 1 / 8,
  strokeLinecap: "butt",
  trailColor: "#376248",
};

const Dashboard = () => {
  const dailyLoss = { start: 0, end: 3965.48 };

  return (
    <div className="main_div">
      <Row>
        {/* Daily Loss Limit */}
        <Col xl="4" sm="12">
          <div className="dashboard_box">
            <h2>DAILY LOSS LIMIT</h2>
            <hr />
            <div className="progress_bar">
              <CircularProgressbar
                value={800}
                minValue={`${dailyLoss.start}`}
                maxValue={`${dailyLoss.end}`}
                text={`$${800}`}
                circleRatio={0.75}
                styles={buildStyles(progressbarStyle)}
              />
              <Row>
                <Col>
                  <h5>${dailyLoss.start}</h5>
                </Col>
                <Col>
                  <h5>${dailyLoss.end}</h5>
                </Col>
              </Row>
            </div>
            <h4>Equity Breach Level: $95,171.44</h4>
            <Row>
              <Col>
                <InfoCircle className="icon" data-tip="Help!" />
              </Col>
            </Row>
          </div>
        </Col>

        {/* Profit Target */}
        <Col xl="4" md="6" sm="12">
          <div className="dashboard_box">
            <h2>PROFIT TARGET</h2>
            <hr />
            <div className="progress_bar">
              <CircularProgressbar
                value={0}
                minValue={`${dailyLoss.start}`}
                maxValue={`${dailyLoss.end}`}
                text={`$${0}`}
                circleRatio={0.75}
                styles={buildStyles(progressbarStyle)}
              />
              <Row>
                <Col>
                  <h5 style={{ color: "#0ce122" }}>${dailyLoss.start}</h5>
                </Col>
                <Col>
                  <h5 style={{ color: "#0ce122" }}>${dailyLoss.end}</h5>
                </Col>
              </Row>
            </div>
            <h4>Equity Profit Goal: $110,000.00</h4>
            <Row>
              <Col>
                <InfoCircle className="icon" data-tip="Help!" />
              </Col>
            </Row>
          </div>
        </Col>

        {/* Maximum Loss Limit */}
        <Col xl="4" md="6" sm="12">
          <div className="dashboard_box">
            <h2>MAXIMUM LOSS LIMIT</h2>
            <hr />
            <div className="progress_bar">
              <CircularProgressbar
                value={0}
                minValue={`${dailyLoss.start}`}
                maxValue={`${dailyLoss.end}`}
                text={`$${0}`}
                circleRatio={0.75}
                styles={buildStyles(progressbarStyle)}
              />
              <Row>
                <Col>
                  <h5>${dailyLoss.start}</h5>
                </Col>
                <Col>
                  <h5>${dailyLoss.end}</h5>
                </Col>
              </Row>
            </div>
            <h4>Equity Breach Level: $95,000.57</h4>
            <Row>
              <Col>
                <InfoCircle className="icon" data-tip="Help!" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Equity */}
        <Col xl="4" md="12">
          <Row>
            <Col xl="12" md="6">
              <div className="dashboard_box">
                <h2>EQUITY</h2>
                <hr />
                <h3>$99,136.92</h3>
                <Row>
                  <Col>
                    <InfoCircle className="icon" data-tip="Help!" />
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Balance */}
            <Col xl="12" md="6">
              <div className="dashboard_box">
                <h2>BALANCE</h2>
                <hr />
                <h3>$99,136.92</h3>
                <Row>
                  <Col>
                    <InfoCircle className="icon" data-tip="Help!" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Program Rules */}
        <Col xl="4" md="12">
          <div className="dashboard_box_progress">
            <h2>PROGRAM RULES</h2>
            <hr />
            <ul>
              <li>Profit Target (10%):$10,000</li>
              <li>Leverage 10:1</li>
              <li>Daily Loss Limit: 4% (hard breach)</li>
              <li>Max Trailing Drawdown: 5% (hard breach)</li>
              <li>Every trade must have a Stop loss (soft breach)</li>
              <li>
                Close out all positions prior to 4PM EST on Fridays (soft
                breach)
              </li>
              <li>10 Maximum Open Lots with Risk (soft breach)</li>
            </ul>
            <Row>
              <Col>
                <InfoCircle className="icon" data-tip="Help!" />
              </Col>
            </Row>
          </div>
        </Col>

        {/* High Water Mark */}
        <Col xl="4" md="12">
          <Row>
            <Col xl="12" md="6">
              <div className="dashboard_box">
                <h2>HIGH WATER MARK</h2>
                <hr />
                <h3>$99,136.92</h3>
                <Row>
                  <Col>
                    <InfoCircle className="icon" data-tip="Help!" />
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Projected Annual Return */}
            <Col xl="12" md="6">
              <div className="dashboard_box">
                <h2>PROJECTED ANNUAL RETURN</h2>
                <hr />
                <h3>$99,136.92</h3>
                <Row>
                  <Col>
                    <InfoCircle className="icon" data-tip="Help!" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <h1>Trader Statistics:</h1>
      <Row>
        {/* Average Win */}
        <Col xl="4" md="4" sm="12">
          <div className="dashboard_box">
            <h2>AVERAGE WIN</h2>
            <hr />
            <h3>$365.25</h3>
            <Row>
              <Col>
                <InfoCircle className="icon" data-tip="Help!" />
              </Col>
            </Row>
          </div>
        </Col>

        {/* Win Rate */}
        <Col xl="4" md="4" sm="12">
          <div className="dashboard_box">
            <h2>WIN RATE</h2>
            <hr />
            <h3>62%</h3>
            <Row>
              <Col>
                <InfoCircle className="icon" data-tip="Help!" />
              </Col>
            </Row>
          </div>
        </Col>

        {/* Average Loss */}
        <Col xl="4" md="4" sm="12">
          <div className="dashboard_box">
            <h2>AVERAGE LOSS</h2>
            <hr />
            <h3>$224.80</h3>
            <Row>
              <Col>
                <InfoCircle className="icon" data-tip="Help!" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
