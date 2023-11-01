package com.quangviet.userservice.entity.token;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Token {
    @Id
    public String id;

//    @Column(unique = true)
    @Indexed(unique = true)
    public String value;

//    @Enumerated(EnumType.STRING)
    public TokenType tokenType = TokenType.bearer;

    public boolean revoked = false;

    public Date dateExpire;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_user")
    @DBRef
    public UserDetails userDetails;
}
