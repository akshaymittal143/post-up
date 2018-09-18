package com.backend.akshayproject.model;


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "comment")
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "comment_id")
  private Long id;

  @Column(name = "body", columnDefinition = "TEXT")
  private String body;

  @Temporal(TemporalType.TIMESTAMP)
  @Column(name = "create_date", nullable = false, updatable = false)
  @CreationTimestamp
  private Date createDate;

  @ManyToOne
  @JoinColumn(name = "post_id", referencedColumnName = "post_id", nullable = false)
  private Post post;

}
