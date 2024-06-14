import React from 'react';
import './About.scss';
import {Collapse, Divider, theme} from "antd";
import {CaretRightOutlined} from '@ant-design/icons';
import classNames from "classnames";
import {AboutContent, AboutText} from "../../../mock/AboutMockData";

const About = () => {
    const classes = classNames("db-about");

    const {token} = theme.useToken();

    return (
        <div className={classes}>
            <div className="pb-10">
                <Divider orientation="left" className="pb-2 text-xl font-bold divider-border-color">
                    <p className="text-2xl">{AboutText.title}</p>
                </Divider>
                <p className="text-lg">
                    {AboutText.description}
                </p>
            </div>
            <Collapse
                defaultActiveKey={['1']}
                size={"large"}
                bordered={false}
                expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
                style={{background: token.colorBgContainer}}
                items={AboutContent}
            />
        </div>
    );
};

export default About;
