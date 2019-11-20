import React from 'react';

class Message extends React.Component {

    render = () => {
      let players = this.props.players ;
      let player = players[0];
      let username = player.username;

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
                        backgroundColor:  this.props.sender === username ? "rgba(1, 54, 126)" : "rgba(16, 64, 146)",
                        borderRadius: this.props.sender === username ? "20px" : "0px",
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
