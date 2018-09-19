package com.backend.akshayproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Collection;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "user_id")
  private Long id;

  @Column(name = "email", unique = true, nullable = false)
  @Email(message = "*Please provide a valid Email")
  @NotEmpty(message = "*Please provide an email")
  @Email(message = "*Please provide an email")
  private String email;

  @Column(name = "password", nullable = false)
  @Length(min = 5, message = "*Your password must have at least 5 characters")
  @NotEmpty(message = "*Please provide your password")
  @JsonIgnore

  private String password;

  @Column(name = "username", nullable = false, unique = true)
  @Length(min = 5, message = "*Your username must have at least 5 characters")
  @NotEmpty(message = "*Please provide your name")
  private String username;

  @Column(name = "name")
  @NotEmpty(message = "*Please provide your name")
  private String name;

  @Column(name = "last_name")
  @NotEmpty(message = "*Please provide your last name")
  private String lastName;

  @Column(name = "active", nullable = false)
  private int active;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Collection<Role> roles;

  @OneToMany(mappedBy = "user")
  private Collection<Post> posts;

  public Collection<Post> getPosts() {
    return posts;
  }

  public void setPosts(Collection<Post> posts) {
    this.posts = posts;
  }
}
