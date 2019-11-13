import React from 'react';

class Message extends React.Component {

    render = () => {
        return (
            <div
                style={{display:"flex",
                        flexDirection: "column",
                        marginTop: "5px",
                        position:"relative",
                        opacity : '90%'
                        }}>

                <div className="sender"
                    style={{
                        marginLeft : '5px',
                        fontSize: "15px",
                        fontWeight:"bold",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                    }}>
                        {this.props.sender}
                </div>
                <div className="msg-content"
                        style={{
                        fontWeight : 'bold',
                        marginLeft : '5px',
                        color : 'white',
                        wordBreak: "break-all",
                        width: "50%",
                        backgroundColor:  this.props.sender === "Benoit :" ? "rgba(16, 84, 146)" : "rgba(16, 64, 146)",
                        borderRadius: "20px",
                        padding: "5px",
                        fontSize: "15px",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                        }}>{this.props.content}
                </div>
                <div className="msg-date"
                    style={{
                        marginLeft : '10px',
                        fontSize: "12px",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                    }}>{this.props.date}
                </div>

            </div>
        )
    }
}

export default Message;
