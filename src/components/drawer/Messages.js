import React from 'react';

class Message extends React.Component {

    render = () => {
        return (
            <div
                style={{display:"flex",
                        flexDirection: "column",
                        marginTop: "5px",
                        position:"relative",
                        }}>
                <div className="msg-date"
                    style={{
                        fontSize: "10px",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                    }}>{this.props.date}
                </div>
                <div className="sender"
                    style={{
                        fontSize: "15px",
                        fontWeight:"bold",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                    }}>
                        {this.props.sender}
                </div>
                <div className="msg-content"
                        style={{
                        wordBreak: "break-all",
                        width: "50%",
                        backgroundColor:  this.props.sender === "Benoit :" ? "rgba(39,204,42)" : "rgba(23,135,251)",
                        borderRadius: "20px",
                        padding: "5px",
                        fontSize: "15px",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                        }}>{this.props.content}
                </div>
                
            </div>
        )
    }
}

export default Message;